docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dlya_generacii-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dlya_generacii-java/app ../../..
