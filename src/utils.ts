
export const chechIfExists = async (collection, user_uid): Promise<boolean> => {
  let result = collection.ref.where('user_uid', '==', user_uid)
  return (await result.get()).empty;
}

export const sendPayload = async (payload, currentUserUid, collection) => {
  payload.user_uid = currentUserUid;
  try {
    await collection.add(
        Object.assign({}, payload)
    );
    console.log('Payload sucessfully saved');
  } catch (error) {
    console.log(error.message);
  }
}