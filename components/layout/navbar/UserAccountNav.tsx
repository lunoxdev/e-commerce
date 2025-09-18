'use client';

import { Session } from '@supabase/supabase-js';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createClient } from 'utils/supabase/client';

export default function UserAccountNav({ session }: { session: Session | null }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.refresh();
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!session) {
        return null; // Or render a login button if preferred
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center h-full space-x-2 mr-4 focus:outline-none"
            >
                {session.user?.user_metadata?.avatar_url ? (
                    <Image
                        src={session.user.user_metadata.avatar_url}
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="h-10 w-10 rounded-full border border-blue-500 shrink-0"
                    />
                ) : (
                    <div className="h-8 w-8 rounded-full border bg-neutral-600 flex items-center justify-center text-white text-md font-bold">
                        {session.user?.user_metadata?.full_name ? session.user.user_metadata.full_name.charAt(0).toUpperCase() : '?'}
                    </div>
                )}
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg py-1 z-20">
                    <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 w-full text-left"
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
}
