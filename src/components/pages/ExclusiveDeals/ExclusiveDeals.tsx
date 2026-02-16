import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export function ExclusiveDeals() {
    return (
        <div className="mx-20">
            <h2 className="text-2xl font-semibold mb-3">Exclusive Deals</h2>
            <div className="flex gap-x-5">
                <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">

                    {/* Image Wrapper */}
                    <div className="relative aspect-video w-full">
                        <Image
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            fill
                            className="object-cover brightness-60 grayscale dark:brightness-40"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 z-10 bg-black/15" />

                    <CardHeader className="relative z-20">
                        {/* <CardAction>
                            <Badge variant="secondary">Featured</Badge>
                        </CardAction> */}

                        <CardTitle>Design systems meetup</CardTitle>

                        <CardDescription>
                            A practical talk on component APIs, accessibility, and shipping faster.
                        </CardDescription>
                    </CardHeader>

                    <CardFooter className="relative z-20">
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>

                <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">

                    {/* Image Wrapper */}
                    <div className="relative aspect-video w-full">
                        <Image
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            fill
                            className="object-cover brightness-60 grayscale dark:brightness-40"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 z-10 bg-black/35" />

                    <CardHeader className="relative z-20">
                        {/* <CardAction>
                            <Badge variant="secondary">Featured</Badge>
                        </CardAction> */}

                        <CardTitle>Design systems meetup</CardTitle>

                        <CardDescription>
                            A practical talk on component APIs, accessibility, and shipping faster.
                        </CardDescription>
                    </CardHeader>

                    <CardFooter className="relative z-20">
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">

                    {/* Image Wrapper */}
                    <div className="relative aspect-video w-full">
                        <Image
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            fill
                            className="object-cover brightness-60 grayscale dark:brightness-40"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 z-10 bg-black/35" />

                    <CardHeader className="relative z-20">
                        {/* <CardAction>
                            <Badge variant="secondary">Featured</Badge>
                        </CardAction> */}

                        <CardTitle>Design systems meetup</CardTitle>

                        <CardDescription>
                            A practical talk on component APIs, accessibility, and shipping faster.
                        </CardDescription>
                    </CardHeader>

                    <CardFooter className="relative z-20">
                        <Button className="w-full">Add to Card</Button>
                    </CardFooter>
                </Card>


                <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">

                    {/* Image Wrapper */}
                    <div className="relative aspect-video w-full">
                        <Image
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            fill
                            className="object-cover brightness-60 grayscale dark:brightness-40"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 z-10 bg-black/35" />

                    <CardHeader className="relative z-20">
                        {/* <CardAction>
                            <Badge variant="secondary">Featured</Badge>
                        </CardAction> */}

                        <CardTitle>Design systems meetup</CardTitle>

                        <CardDescription>
                            A practical talk on component APIs, accessibility, and shipping faster.
                        </CardDescription>
                    </CardHeader>

                    <CardFooter className="relative z-20">
                        <Button className="w-full">Add to Cart</Button>
                    </CardFooter>
                </Card>


            </div>
        </div>

    )
}