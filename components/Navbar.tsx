import Image from "next/image";
import Link from "next/link";
import logo from "../img/AdminBoard.png";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
    return ( 
        <div className='bg-primary dark:bg-slate-700 py-3 px-3 flex justify-between'>
            <Link href='/'>
                <Image src = {logo} alt = 'admin-logo' width={280}></Image>
            </Link>
            <div className="flex items-center">
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger className='focus:outline-none'>
                    <Avatar>
                            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn'/>
                            <AvatarFallback className="text-black">AD</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                        <Link href='/profile'>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <Link href='/auth'>Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div> 
    );
}
 
export default Navbar;