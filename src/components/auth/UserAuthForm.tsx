"use client";
import { FC, useState } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

import { signIn } from "next-auth/react";
import { Icons } from "../Icons";
import { useToast } from "@/components/ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("discord");
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={cn("flex justify-center", className)} {...props}>
        <Button
          size='sm'
          className='w-full'
          onClick={loginWithGoogle}
          isLoading={isLoading}
        >
          {isLoading ? null : <Icons.google className='w-4 h-4 mr-2' />}
          Discord
        </Button>
      </div>
    </>
  );
};
export default UserAuthForm;
