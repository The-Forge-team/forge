import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex flex-col p-10 md:p-20 items-center">
      <Card className="w-full md:max-w-1/2 grid md:grid-cols-[1fr_2fr] gap-6 p-6">
        <div>
          <h3 className="text-2xl font-bold">Imagessss</h3>
        </div>
        <div>
          <CardHeader>
            <CardTitle className="mb-5 text-2xl">
              Welcome to <span className="text-5xl block text-green-400">FORGE</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col  mb-10">
                <div className="grid gap-2">
                  
                  <Input
                    id="text"
                    type="text"
                    placeholder="Enter Username or Email"
                    required
                  />
                </div>
                <div className="grid ">
                  <div className="flex items-center">
                    
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
              </div>
            </form>
            <div className="grid gap-2 mb-10">
              <div className="flex items-center">
                <Button type="submit" className="hover:cursor-pointer">
                  LOG IN
                </Button>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm hover:cursor-pointer  text-gray-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-5">
            <div className=" grid grid-cols-3 items-center gap-4">
              <hr />
              <p className="text-sm text-gray-500">or Log in with </p>
              <hr />
            </div>

            <div className="flex gap-5 w-full">
              <Button className="w-1/2 hover:cursor-pointer" >
                <FcGoogle size={60} />
              </Button>
              <Button className="w-1/2 hover:cursor-pointer" >
                <FaGithub size={60} />
              </Button>
            </div>
            <div>
              <a className="text-sm text-gray-500 hover:cursor-pointer">Create my FORGE account!</a>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
