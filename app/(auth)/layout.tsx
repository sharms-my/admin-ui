import Image from "next/image";
import logo from "../../img/AdminBoard.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[100vh] flex items-center justify-center relative'>
      <div className="bg-primary p-10 rounded-lg">
        <div className="flex justify-center mb-3">
          <Image src = {logo} alt = 'admin-logo' width={280}></Image>
        </div> 
        {children}
      </div>
      
    </div>
  );
};

export default AuthLayout;
