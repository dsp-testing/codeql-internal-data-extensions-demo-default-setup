import {
  readUserData,
  requiresSanitization,
  sanitizeData,
  writeUserData
} from '@example/read-write-user-data';

async function main() {
  while (true) {

    // Read tainted data
    const data = await readUserData({ port: 8080 });

    // Maybe sanitize it
    const sanitizedData = requiresSanitization(data)
      ? sanitizeData(data)
      : data;

    // Write possibly tainted data
    await writeUserData(sanitizedData);
    await writeUserData(sanitizedData);
    await writeUserData(sanitizedData);
  }
}
main();
