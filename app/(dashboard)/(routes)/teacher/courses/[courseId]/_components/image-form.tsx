"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import { Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is Required",
  }),
});

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Failed to update course title");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditting && <>Cancel</>}
          {!isEditting && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w4 mr-2" />
              Add an image
            </>
          )}
          {!isEditting && initialData.imageUrl && (
            <>
              <Pencil className="h-4 w4 mr-2" />
              Edit image
            </>
          )}
        </Button>
      </div>
      {!isEditting &&
        (!initialData.imageUrl ? (
          <div className="flex items-center justify-center h-60">
            <ImageIcon className="h-10 w-10 to-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              alt="uploaded image"
              fill
              className="object-cover rounded-md"
              src={initialData.imageUrl}
            />
            Current Image
          </div>
        ))}
      {isEditting && (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  );
};
