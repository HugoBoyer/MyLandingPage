export default function Navbar() {
    return (
        <>
            <nav class="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex shrink-0 items-center">
                                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="h-8 w-auto" />
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <a href="#" aria-current="page" class="rounded-md px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-950/50 hover:text-white">Team</a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-950/50 hover:text-white">Projects</a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-950/50 hover:text-white">Calendar</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-950/50 hover:text-white">Login</a>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}