'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from '@/components/ui/dialog';
import { useProModal } from '@/hooks/use-pro-modal';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProModal = () => {
  const proModal = useProModal();
  const { toast } = useToast();

  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubscribe = async () => {
    try {
      setLoading(true);

      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Something went wrong',
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.close}>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center">Upgrade to Pro</DialogTitle>
          <DialogDescription className="text-center space-y-2">
            Create
            <span className="text-sky-500 mx-1 font-medium">Custom AI</span>
            Companions!
          </DialogDescription>
        </DialogHeader>
        <Separator />

        <div className="flex justify-between">
          <p className="text-2xl font-medium">
            ₹500<span className="text-sm font-normal"> / mo</span>
          </p>
          <Button disabled={loading} onClick={onSubscribe} variant="premium">
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
