if [ -f .env ]
then
  export $(cat .env | xargs)
fi

cd "$BACKEND_PATH";
yarn start;
