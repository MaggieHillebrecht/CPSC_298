'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Backyard Paw Patrol</h1>
          <p className="text-xl text-pink-400">A Cozy Crime-Fighting Adventure</p>
        </header>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Backyard Paw Patrol Game Screenshot"
            width={800}
            height={600}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">About the Game</h2>
          <p className="text-gray-700">
            Join Whiskers the cat and Barkley the dog as they protect their owner's backyard from mischievous critters and solve mini-mysteries. Experience puzzle-solving, exploration, and teamwork in this charming, family-friendly game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-pink-600">Base Game</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-pink-500 mb-2">$19.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-500 hover:bg-pink-600">
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Base Game
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-pink-600">Creator's Edition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-pink-500 mb-2">$29.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-500 hover:bg-pink-600">
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Creator's Edition
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}