import ChefClaudeLogo from "../assets/images/chef-claude-logo.svg"

export const Header = () =>{
    return(
        <header className={`w-full`}>
            <div className={`w-full xl:w-[1200px] m-auto bg-white [box-shadow:0px_1px_2px_0px_#0000000F,0px_1px_3px_0px_#0000001A] text-center py-[20px]`}>
                <img src={ChefClaudeLogo} alt="Chef Claude App Logo" width={226} height={60} className="w-auto he-auto m-auto" />
            </div>
        </header>
    )
}