import fs from "fs";
import path from "path";

export type ImageObject = {
  src: string;
  alt: string;
};

export async function importImages(folderPath: string): Promise<ImageObject[]> {
  try {
    const resolvedPath = path.join(process.cwd(), folderPath);
    const files = await fs.readdirSync(resolvedPath);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
    const images = files.filter((file) =>
      imageExtensions.includes(path.extname(file).toLowerCase())
    );

    const imageObjects: ImageObject[] = images.map((image) => {
      const src = path.join(folderPath.replace(/^public/, ""), image).replace(/\\/g, "/");
      const alt = path.basename(image, path.extname(image));
      return { src, alt, width: 300, height: 300 };
    });

    return imageObjects;
  } catch (error) {
    console.error("Error reading images from folder:", error);
    // throw new Error("Failed to import images from the specified folder.");
    return [];
  }
}
