const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center mt-9 justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
