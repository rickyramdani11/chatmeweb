
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ChatMe - APK Manager
          </h1>
          <p className="text-xl text-gray-600">
            Upload and manage your Android APK files
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-6 w-6" />
                Upload APK
              </CardTitle>
              <CardDescription>
                Upload your Android APK files to the server
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/upload-apk">
                <Button className="w-full">
                  Go to Upload
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-6 w-6" />
                Download APK
              </CardTitle>
              <CardDescription>
                View and download uploaded APK files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/download-apk">
                <Button className="w-full" variant="outline">
                  View Files
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
