
export const ConsultaPexels = async (category) => {

  const resp = await fetch(`https://api.pexels.com/v1/search?query=${category}&orientation=landscape&per_page=5`, {
    method: 'GET',
    headers: {
      Authorization: '563492ad6f91700001000001422228b0fb354376a773b0a4e3bd80ab'
    },
    mode: 'cors',
    cache: 'force-cache'
  })

  return await resp.json()
}





