export async function load({ params }) {
    const memberResponse = await fetch(
        `https://fdnd.directus.app/items/person/${params.id}?fields=*,squads.squad_id.name,squads.squad_id.cohort`
    );

    const memberData = await memberResponse.json();

    return { member: memberData.data };
}