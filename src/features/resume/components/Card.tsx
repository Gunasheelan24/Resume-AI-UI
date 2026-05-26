import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { secureImg } from "@/assets/png/Index";

interface WhyChoosingUsProps {
  img: string;
  title: string;
  descripiton: string;
}

const WhyChoosingUsCard: React.FC<WhyChoosingUsProps> = ({
  img,
  title,
  descripiton,
}) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>
          <p className="flex items-center justify-center">
            <img src={img} alt="secure-img" className="h-10 object-contain" />
          </p>
          <p className="text-center mt-2">{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center !mt-[-13px]">
        <p>{descripiton}</p>
      </CardContent>
    </Card>
  );
};

export default WhyChoosingUsCard;
