import { Companion } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { MessagesSquare } from 'lucide-react';

import { Card, CardFooter, CardHeader } from '@/components/ui/card';

interface CompaninosProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

const Companinos = ({ data }: CompaninosProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" alt="Empty" src="/empty.png" />
        </div>

        <p className="text-sm text-muted-foreground">No companions found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10">
      {data.map((item) => (
        <Card
          key={item.id}
          className="bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0 min-w-[9rem]"
        >
          <Link
            className="flex flex-col justify-between h-full"
            href={`/chat/${item.id}`}
          >
            <CardHeader className="flex items-center justify-center text-center gap-3">
              <div className="relative w-32 h-32">
                <Image
                  src={item.src}
                  fill
                  className="rounded-xl object-cover"
                  alt="Companion"
                />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-gray-700 dark:text-gray-300">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </CardHeader>

            <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
              <p className="lowercase">@{item.userName}</p>
              <div className="flex items-center">
                <MessagesSquare className="w-3 h-3 mr-1" />
                {item._count.messages}
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Companinos;
