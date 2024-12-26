import { lstatSync, readdirSync } from 'fs'
import path from 'path'

export const getFilesRecursive = async (
  currentPath: string,
  includeDirectories = false,
  ignorePaths: Array<string> = ['.DS_Store']
): Promise<string[]> => {
  const dirsAndFiles = readdirSync(currentPath).filter(
    (f) => !ignorePaths.includes(f)
  )
  const directories = dirsAndFiles.filter((f) =>
    lstatSync(path.join(currentPath, f)).isDirectory()
  )
  const result = dirsAndFiles
    .filter((f) => includeDirectories || !directories.includes(f))
    .map((f) => path.join(currentPath, f))

  const subResults = await Promise.all(
    directories.map(async (dir) => {
      const joinedPath = path.join(currentPath, dir)
      return getFilesRecursive(joinedPath, includeDirectories)
    })
  )
  result.push(...subResults.flatMap((s) => s))
  return result
}
