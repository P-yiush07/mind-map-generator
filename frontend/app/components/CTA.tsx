import { Button } from "@/components/ui/button";

export function CTA () {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Visualize Your Ideas?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who are already using Mind-Maps to enhance their productivity and creativity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button className="w-full min-[400px]:w-auto">Get Started Now</Button>
                <Button variant="outline" className="w-full min-[400px]:w-auto">View Demo</Button>
              </div>
            </div>
          </div>
        </section>
    )
}