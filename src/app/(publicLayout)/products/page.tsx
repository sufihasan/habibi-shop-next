import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Products() {
    return (
        <Tabs defaultValue="allproduct">
            <TabsList>
                <TabsTrigger value="allproduct">All Product</TabsTrigger>
                <TabsTrigger value="exclusiveDeals">Exclusive Deals</TabsTrigger>
                <TabsTrigger value="everydayEssentials">Everyday Essentials</TabsTrigger>
                <TabsTrigger value="groceryItems">Grocery Items</TabsTrigger>
            </TabsList>
            <TabsContent value="allproduct">
                {/* <Card>
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                        <CardDescription>
                            View your key metrics and recent project activity. Track progress
                            across all your active projects.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        You have 12 active projects and 3 pending tasks.
                    </CardContent>
                </Card> */}
                <div>
                    <h1>All Product</h1>
                </div>
            </TabsContent>
            <TabsContent value="exclusiveDeals">
                {/* <Card>
                    <CardHeader>
                        <CardTitle>Analytics</CardTitle>
                        <CardDescription>
                            Track performance and user engagement metrics. Monitor trends and
                            identify growth opportunities.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        Page views are up 25% compared to last month.
                    </CardContent>
                </Card> */}
                <div>
                    <h1>This is out exclusive dels</h1>
                </div>
            </TabsContent>
            <TabsContent value="everydayEssentials">
                {/* <Card>
                    <CardHeader>
                        <CardTitle>Reports</CardTitle>
                        <CardDescription>
                            Generate and download your detailed reports. Export data in
                            multiple formats for analysis.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        You have 5 reports ready and available to export.
                    </CardContent>
                </Card> */}
                <div>
                    <h1>This is every day Essentials</h1>
                </div>
            </TabsContent>
            <TabsContent value="groceryItems">
                {/* <Card>
                    <CardHeader>
                        <CardTitle>Settings</CardTitle>
                        <CardDescription>
                            Manage your account preferences and options. Customize your
                            experience to fit your needs.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        Configure notifications, security, and themes.
                    </CardContent>
                </Card> */}
                <div>
                    <h1>Grocery item</h1>
                </div>
            </TabsContent>
        </Tabs>
    )
}
