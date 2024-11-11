import React from 'react'

function Card({username}) //  ++++++++++ PROPS - makes component reusable ++++++++++

{
    // console.log("props", props)
    return (
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" >
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/15575941/pexels-photo-15575941/free-photo-of-portrait-of-woman-holding-jacket-over-head.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
        <blockquote>
            <p class="text-lg font-medium">
            {/* “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.” */ username}
            </p>
            </blockquote>
        </div>
        </figure>
    )
}

export default Card

