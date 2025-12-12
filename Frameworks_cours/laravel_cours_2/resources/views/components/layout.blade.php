
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>

        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Site minimaliste</title>

        @vite(['resources/css/app.css', 'resources/js/app.js'])

    </head>

    <body class="flex flex-col min-h-screen">

        {{-- navbar --}}

        <nav class="bg-white shadow-md p-4">

            <div class="container mx-auto flex justify-between items-center">
                
                <a href="" class="text-xl font-bold">Logo</a>

                <ul class="flex space-x-6">

                    <x-link-item href="/" class="underline"  :active="Route::currentRouteName() === 'homepage' ? true : false">Homepage</x-link-item> <!-- mettre `:` signifie que la valeur est une expression PHP -->
                    
                    <x-link-item href="/projects" :active="Route::currentRouteName() === 'projects' ? true : false" >Projects</x-link-item>

                    <x-link-item href="/recipes" :active="fnmatch('recipes.*', Route::currentRouteName()) ? true : false" >Recipes</x-link-item>

                </ul>

            </div>

        </nav>

        {{-- Main content --}}

        <main  class="grow container mx-auto p-6">

            {{ ($slot) }}

        </main>

        {{-- Footerr --}}

        <footer class="bg-gray-100 text-center p-4 mt-6">

            <p class="text-gray-600">&copy; 2025 Mon site. Tous droits reservés.</p>

        </footer>
        
    </body>

</html>
