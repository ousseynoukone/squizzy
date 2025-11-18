export default function Layout ({ children }){
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F9FF] to-[#E4EEFF] flex items-center justify-center px-4">
            {children}
        </div>
    );
}