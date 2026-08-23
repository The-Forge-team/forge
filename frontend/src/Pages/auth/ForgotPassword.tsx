import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Mail } from "lucide-react";
import illustration from "@/assets/forgot-password-illustration.png";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#fff5f0]">
      <Card className="w-full max-w-lg flex flex-col items-center text-center space-y-4 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 border-[#0f766e]/10">
        
     
        <div className="w-48 h-48 mb-2 flex items-center justify-center overflow-hidden">
          <img 
            src={illustration} 
            alt="Forgot Password Illustration" 
            className="w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>

 
        <CardHeader className="space-y-2 w-full">
          <CardTitle className="text-2xl font-bold tracking-tight text-[#0f766e]">
            Forgot Password?
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm px-4">
            Please enter your registered email address we will get back to you with the reset password link and confirmation OTP thanks
          </CardDescription>
        </CardHeader>

 <CardContent className="w-full">

<form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors duration-300 group-focus-within:text-[#0f766e]" />
            <Input 
              type="email" 
              placeholder="Enter email" 
              className="pl-10 h-11 bg-card text-card-foreground border-border transition-all duration-300 focus:ring-2 focus:ring-[#0f766e] focus:border-transparent hover:border-[#0f766e]/50"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-11 bg-[#0f766e] text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#0d655d] hover:shadow-lg hover:shadow-black/10 active:scale-[0.98] cursor-pointer"
          >
            SUBMIT
          </Button>
        </form>


 </CardContent>
        

      </Card>
    </div>
  );
}
