
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/fabiosoares-silva/portfolio-js/refs/heads/main/data/profile.json"
    const fetching = await fetch(url)

    return fetching.json()
}