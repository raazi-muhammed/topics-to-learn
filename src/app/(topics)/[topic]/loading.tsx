import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkelton() {
    return (
        <>
            <Skeleton className="h-14 w-full max-w-96" />
            <div className="mt-4 space-y-4">
                {[...new Array(15).fill(0)].map((_, index) => (
                    <Skeleton key={index} className="h-8 w-full max-w-56" />
                ))}
            </div>
        </>
    );
}
