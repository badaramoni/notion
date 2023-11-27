"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { useConvexAuth } from "convex/react";
import { Link } from "lucide-react";

export const Navbar = () => {
    const {isAuthenticated,isLoading} = useConvexAuth();
    const scrolled = useScrollTop();
    return(
        <div className= {cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
         notion
         <div className="md:ml-auto md:justify-end justify-between w-full 
         flex items-center gap-x-2">
            {isLoading && (
                <Spinner/>
            )}
            {!isAuthenticated && !isLoading && (
                <><SignInButton mode="modal">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </SignInButton><SignInButton mode="modal">
                            <Button  size="sm">
                                Get notion free
                            </Button>
                        </SignInButton></>
                
            )}
            {isAuthenticated && !isLoading && (
                <>
                <Button variant="ghost" size="sm" asChild>
                 <Link href="/documents">
                 Enter notion
                 </Link>
                </Button>
                <UserButton
                    afterSignOutUrl = "/"
                />
                </>
            )}
         </div>

        </div>
    )
}