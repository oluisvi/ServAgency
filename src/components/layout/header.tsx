import {ArrowUpRight} from "lucide-react"; import {navigation} from "@/content/site"; import {Brand} from "@/components/ui/brand";
export function Header(){return <header className="header"><a href="#inicio"><Brand/></a><nav>{navigation.map(i=><a key={i.href} href={i.href}>{i.label}</a>)}</nav><a className="header-cta" href="#contato" data-magnetic>Iniciar projeto <ArrowUpRight/></a></header>}
