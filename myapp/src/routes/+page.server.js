// Dit is je server.js

export async function load({ url }) {
    const membersResponse = await fetch ('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={%22_and%22:[{%22squads%22:{%22squad_id%22:{%22tribe%22:{%22name%22:%22FDND%20Jaar%202%22}}}},{%22squads%22:{%22squad_id%22:{%22cohort%22:%222526%22}}}]}')
    const membersData = await membersResponse.json();

    return {members: membersData.data};
}