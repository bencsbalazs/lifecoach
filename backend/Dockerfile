FROM python:3.13-slim-bookworm AS get-requirements

RUN apt-get update && apt-get install --no-install-recommends -y \
  build-essential \
  libpq-dev \
  postgresql-client \
  gcc

ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM get-requirements AS copy-app
WORKDIR /app
COPY . .

FROM copy-app AS app-runner
EXPOSE 8000
CMD python3 manage.py migrate --noinput && gunicorn -w 4 -b 0.0.0.0:8000 lifecoach.wsgi:application
