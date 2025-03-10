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
    <Card className="flex flex-col overflow-hidden border border-gray-100/10 hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Image src={imageUrl} alt={title} width={400} height={160} className="w-full h-52 object-cover" />
      <CardHeader className="px-4 py-2"> 
        <div className="space-y-0.5">
          <CardTitle className="text-base">{title}</CardTitle>
          <time className="font-sans text-xs text-muted-foreground">
            {dates}
          </time>
        </div>
      </CardHeader>
      <CardContent className="px-4 pt-1 pb-3">
        <p className="text-xs text-slate-200">{description}</p>
      </CardContent>
    </Card>
  );
}