// Styles (IMPORTANT: must be first)
import './styles/globals.css'

// Utils
export * from './lib/utils'

// Shadcn Base (18 componentes)
export { Button, buttonVariants } from './components/ui/button'
export { Card, CardCompound, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card'
export { Input } from './components/ui/input'
export { Textarea } from './components/ui/textarea'
export { Label } from './components/ui/label'
export { Checkbox } from './components/ui/checkbox'
export { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
export { Switch } from './components/ui/switch'
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
export { Badge, badgeVariants } from './components/ui/badge'
export { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar'
export { Separator } from './components/ui/separator'
export { Skeleton } from './components/ui/skeleton'
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip'
export { Progress } from './components/ui/progress'
export { Slider } from './components/ui/slider'
export { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card'
export { ScrollArea, ScrollBar } from './components/ui/scroll-area'
export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './components/ui/form'

// Magic UI Premium (10 componentes)
export { ShimmerButton } from './components/ui/shimmer-button'
export { RainbowButton } from './components/ui/rainbow-button'
export { ShinyButton } from './components/ui/shiny-button'
export { MagicCard } from './components/ui/magic-card'
export { BorderBeam } from './components/ui/border-beam'
export { NeonGradientCard } from './components/ui/neon-gradient-card'
export { AnimatedGradientText } from './components/ui/animated-gradient-text'
export { TextAnimate } from './components/ui/text-animate'
export { Particles } from './components/ui/particles'
export { AnimatedBeam } from './components/ui/animated-beam'

// Tier 2 - Composition (9 componentes)
export { Dialog, DialogCompound, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from './components/ui/dialog'
export { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger } from './components/ui/drawer'
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger } from './components/ui/sheet'
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './components/ui/dropdown-menu'
export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from './components/ui/context-menu'
export { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
export { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'
export { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
