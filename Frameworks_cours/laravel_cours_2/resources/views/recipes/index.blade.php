
<x-layout>

    <h1>My recipes</h1>

    @foreach ($recipes as $key => $recipe)

        <p><a href="{{ route('recipes.show', $key) }}" class="underline text-blue-500 hover:text-blue-800 ">{{ $recipe['title'] }}</a></p>
        
    @endforeach

</x-layout>