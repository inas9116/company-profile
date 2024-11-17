import { createClient, FieldsType } from "contentful";
interface ResponseEntry {
    sys: { id: string };
    fields: FieldsType;
}

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

 export const getEntries = async () => {
    try {
        const response = await client.getEntries({
            content_type: "program",
        });

        const programs = response.items.map((program: ResponseEntry) => {
            return {
                entryId: program.sys.id,
                thumbnail:"https:" +  program.fields.thumbnail.fields.file.url,
                title: program.fields.title,
                description: program.fields.description,
                content: program.fields.content,
                price: program.fields.price,
            };
        });

        return programs;
    } catch (error) {
        console.log(error);     
    }
 }



