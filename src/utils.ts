
export const chechIfExists = async (collection, user_uid): Promise<boolean> => {
    let result = collection.ref.where('user_uid', '==', user_uid)
    return (await result.get()).empty;
}