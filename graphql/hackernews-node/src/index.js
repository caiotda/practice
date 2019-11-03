const { GraphQLServer } = require('graphql-yoga');

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

let idCount = links.length;

const resolvers = {
    Query: {
        info: () => "This is the API of a Hackernews Clone ",
        feed: () => links,
        link: (parent, args) => links.find( link => link.id === args.id),
    },

    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link);
            return link;
        },

        updateLink: (parent, args) => {
            let toBeUpdated = links.findIndex(
                link => link.id === args.id
            );

            if (toBeUpdated === -1)
                return null;

            let clone = {
                ...links[toBeUpdated]
            };

            links[toBeUpdated] = {
                ...clone,
                ...args,
            };            
            return links[toBeUpdated];
        },

        deleteLink: (parent, args) => {
            let toBeDeleted = links.findIndex(
                link => link.id === args.id
            );

            if (toBeDeleted === -1)
                return null;
            idCount--;
            return links.splice(toBeDeleted, 1)[0];
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})
server.start(() => console.log(`Server is running on https://localhost:4000`));
