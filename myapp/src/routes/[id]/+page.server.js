export async function load({ url, params }) {
    const memberResponse = await fetch ('https://fdnd.directus.app/items/person/'+ params.id)
    const 

    return {member: membersData.data};
}

