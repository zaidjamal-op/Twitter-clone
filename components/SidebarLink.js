function SidebarLink({text, Icon, active}) {
    return (
        <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold text-[#1d9bf0]"}`}>
            <Icon className={`h-7 text-white ${active && "font-bold text-[#1d9bf0]"}`} />
            <span className="hidden xl:inline">{text}</span>
        </div>
    )
}

export default SidebarLink
