
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileCheck, Loader2, Download } from "lucide-react";
import { Link } from "wouter";
import { getApiUrl } from "@/lib/config";

export default function UploadApk() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.apk')) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Error",
          description: "Please select a valid APK file",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select an APK file first",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('apk', file);

    try {
      const response = await fetch(getApiUrl('/api/upload-apk'), {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: `APK uploaded successfully: ${data.filename}`,
        });
        setFile(null);
        // Reset input
        const input = document.getElementById('apk-input') as HTMLInputElement;
        if (input) input.value = '';
      } else {
        throw new Error(data.message || 'Upload failed');
      }
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Upload className="h-6 w-6" />
            Upload APK File
          </CardTitle>
          <CardDescription>
            Select and upload your Android APK file
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="apk-input" className="text-sm font-medium">
              Choose APK File
            </label>
            <Input
              id="apk-input"
              type="file"
              accept=".apk"
              onChange={handleFileChange}
              disabled={uploading}
              className="cursor-pointer"
            />
          </div>

          {file && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
              <FileCheck className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-green-900">{file.name}</p>
                <p className="text-xs text-green-600">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}

          <Button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="w-full"
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload APK
              </>
            )}
          </Button>

          <Link href="/download-apk">
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              View Uploaded Files
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
