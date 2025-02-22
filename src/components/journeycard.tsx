import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  dates: string;
  imageUrl: string;
}

export function JourneyCard({ title, description, dates, imageUrl }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Image src={imageUrl} alt={title} width={400} height={160} className="w-full h-52 object-cover" />
      <CardHeader className="px-4"> 
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <time className="font-sans text-xs text-muted-foreground">
            {dates}
          </time>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
