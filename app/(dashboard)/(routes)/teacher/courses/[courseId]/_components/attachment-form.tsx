"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { File, ImageIcon, Loader2, Pencil, PlusCircle, X } from "lucide-react";
import { useForm } from "react-hook-form";

import { Attachment, Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

const formSchema = z.object({
  url: z.string().min(1),
});

export const AttachmentForm = ({
  initialData,
  courseId,
}: AttachmentFormProps) => {
  const [isEditting, setIsEditting] = useState(false);

  const [deletingId, setdeletingId] = useState<string | null>(null);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Failed to update course title");
    }
  };

  const onDelete = async (id: string) => {
    try {
      setdeletingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success("Attachment deleted successfully");
      router.refresh();
    } catch {
      toast.error("Failed to delete attachment");
    } finally {
      setdeletingId(null);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course attachments
        <Button onClick={toggleEdit} variant="ghost">
          {isEditting && <>Cancel</>}
          {!isEditting && (
            <>
              <PlusCircle className="h-4 w4 mr-2" />
              Add a file
            </>
          )}
        </Button>
      </div>
      {!isEditting && (
        <>
          {initialData.attachments.length === 0 && (
            <p className="text-sm mt-2 to-slate-500 italic">
              No attachments yet
            </p>
          )}
          {initialData.attachments.length > 0 && (
            <div className="space-y-2">
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center p-3 w-full bg-sky-100 border-sky-200 text-sky-700 rounded-md"
                >
                  <File className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-sm line-clamp-1">{attachment.name}</p>
                  {deletingId === attachment.id && (
                    <div>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {deletingId !== attachment.id && (
                    <button
                      onClick={() => onDelete(attachment.id)}
                      className="ml-auto hover:opacity-75 transition"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {isEditting && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Add anything your students might require to complete this course.
          </div>
        </div>
      )}
    </div>
  );
};
