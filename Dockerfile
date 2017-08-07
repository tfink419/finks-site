FROM python:2.7.11
RUN pip install Flask
ADD src/python /home

CMD python ./home/main.py
