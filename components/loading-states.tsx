"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ReligionCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto p-6 bg-muted rounded-full w-fit mb-4">
          <Skeleton className="h-8 w-8" />
        </div>
        <Skeleton className="h-6 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-20 mx-auto" />
      </CardHeader>
      <CardContent className="text-center">
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-8 w-24 mx-auto" />
      </CardContent>
    </Card>
  );
}

export function DeityCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <div className="relative h-48 bg-muted rounded-t-lg" />
      <CardContent className="p-4">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-3 w-16" />
      </CardContent>
    </Card>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
      {/* Hero Skeleton */}
      <section className="py-20">
        <div className="nav-container text-center space-y-6">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </section>

      {/* Content Grid Skeleton */}
      <section className="py-16">
        <div className="nav-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ReligionCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}