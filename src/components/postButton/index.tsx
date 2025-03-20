import React from "react";
import { Button } from "../ui/button";

interface PostButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const PostButton: React.FC<PostButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
      <Button className="w-full h-12" onClick={onClick} disabled={disabled}>
        Post Order
      </Button>
    </div>
  );
};

export default PostButton;
