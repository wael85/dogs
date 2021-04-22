const ArrayOfPic = async (breed:string): Promise<Array<string>> => {
    const data = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`);
    const result = await data.json();
    const arrayOfUrl = await result.message;
    return arrayOfUrl;
};
export default ArrayOfPic;