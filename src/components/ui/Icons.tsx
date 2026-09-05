// Standardized Icons System powered by Lucide React
import React from "react";
import {
  MessageSquare,
  Rocket,
  ArrowDown,
  ArrowRight,
  Zap,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  LayoutDashboard,
  Smartphone,
  Cloud,
  Network,
  FileEdit,
  Globe,
  Palette,
  Database,
  Cpu,
  Menu,
  X,
  Code2,
  Award,
  Mail,
  HeartHandshake,
  PlayCircle,
  Quote,
  BadgeCheck,
  Handshake,
  Mic,
  Check,
  Users,
  Clock,
  MessagesSquare,
  Wrench,
  Scale,
  Lock,
  Coins,
  type LucideIcon,
} from "lucide-react";

export interface IconProps {
  className?: string;
  size?: number;
}

function renderLucide(IconComponent: LucideIcon, { className = "", size = 20 }: IconProps, defaultSize = 20) {
  return <IconComponent size={size || defaultSize} className={className} strokeWidth={1.8} />;
}

export function IconChat(props: IconProps) {
  return renderLucide(MessageSquare, props, 18);
}

export function IconRocket(props: IconProps) {
  return renderLucide(Rocket, props, 20);
}

export function IconArrowDown(props: IconProps) {
  return renderLucide(ArrowDown, props, 18);
}

export function IconArrowRight(props: IconProps) {
  return renderLucide(ArrowRight, props, 18);
}

export function IconSpeed(props: IconProps) {
  return renderLucide(Zap, props, 26);
}

export function IconShield(props: IconProps) {
  return renderLucide(ShieldCheck, props, 26);
}

export function IconHeadset(props: IconProps) {
  return renderLucide(Headphones, props, 26);
}

export function IconCheckCircle(props: IconProps) {
  return renderLucide(CheckCircle2, props, 18);
}

export function IconDashboard(props: IconProps) {
  return renderLucide(LayoutDashboard, props, 30);
}

export function IconSmartphone(props: IconProps) {
  return renderLucide(Smartphone, props, 30);
}

export function IconCloudSync(props: IconProps) {
  return renderLucide(Cloud, props, 30);
}

export function IconRoute(props: IconProps) {
  return renderLucide(Network, props, 30);
}

export function IconEditNote(props: IconProps) {
  return renderLucide(FileEdit, props, 20);
}

export function IconWeb(props: IconProps) {
  return renderLucide(Globe, props, 28);
}

export function IconPalette(props: IconProps) {
  return renderLucide(Palette, props, 28);
}

export function IconDatabase(props: IconProps) {
  return renderLucide(Database, props, 28);
}

export function IconMemory(props: IconProps) {
  return renderLucide(Cpu, props, 28);
}

export function IconMenu(props: IconProps) {
  return renderLucide(Menu, props, 24);
}

export function IconClose(props: IconProps) {
  return renderLucide(X, props, 24);
}

export function IconCode(props: IconProps) {
  return renderLucide(Code2, props, 18);
}

export function IconBadge(props: IconProps) {
  return renderLucide(Award, props, 16);
}

export function IconMail(props: IconProps) {
  return renderLucide(Mail, props, 16);
}

export function IconHealthSafety(props: IconProps) {
  return renderLucide(HeartHandshake, props, 26);
}

export function IconPlayCircle(props: IconProps) {
  return renderLucide(PlayCircle, props, 26);
}

export function IconQuote(props: IconProps) {
  return renderLucide(Quote, props, 24);
}

export function IconVerified(props: IconProps) {
  return renderLucide(BadgeCheck, props, 16);
}

export function IconHandshake(props: IconProps) {
  return renderLucide(Handshake, props, 18);
}

export function IconVoiceOver(props: IconProps) {
  return renderLucide(Mic, props, 22);
}

export function IconCheck(props: IconProps) {
  return renderLucide(Check, props, 14);
}

export function IconGroup(props: IconProps) {
  return renderLucide(Users, props, 22);
}

export function IconSchedule(props: IconProps) {
  return renderLucide(Clock, props, 22);
}

export function IconForum(props: IconProps) {
  return renderLucide(MessagesSquare, props, 22);
}

export function IconConstruction(props: IconProps) {
  return renderLucide(Wrench, props, 22);
}

export function IconGavel(props: IconProps) {
  return renderLucide(Scale, props, 16);
}

export function IconLock(props: IconProps) {
  return renderLucide(Lock, props, 16);
}

export function IconCoins(props: IconProps) {
  return renderLucide(Coins, props, 16);
}

// Dynamic icon map for string-based icon lookups
export const iconMap: Record<string, React.FC<IconProps>> = {
  dashboard: IconDashboard,
  smartphone: IconSmartphone,
  cloud_sync: IconCloudSync,
  route: IconRoute,
  web: IconWeb,
  palette: IconPalette,
  database: IconDatabase,
  memory: IconMemory,
  cloud_upload: IconCloudSync,
  stay_current_portrait: IconSmartphone,
  code: IconCode,
  badge: IconBadge,
  mail: IconMail,
  chat: IconChat,
  speed: IconSpeed,
  verified_user: IconShield,
  support_agent: IconHeadset,
  health_and_safety: IconHealthSafety,
  play_circle: IconPlayCircle,
  verified: IconVerified,
  format_quote: IconQuote,
  handshake: IconHandshake,
  record_voice_over: IconVoiceOver,
  check: IconCheck,
  check_circle: IconCheckCircle,
  group: IconGroup,
  schedule: IconSchedule,
  forum: IconForum,
  construction: IconConstruction,
  rocket_launch: IconRocket,
  gavel: IconGavel,
  lock: IconLock,
  monetization_on: IconCoins,
};
