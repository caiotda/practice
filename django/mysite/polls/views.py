from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic

from .models import Choice, Question

# Create your views here.

""" 
    def detail(request, question_id):
        try:
            question = Question.objects.get(pk=question_id)
        except Question.DoesNotExist:
            raise Http404("Question does not exist")
        return render(request, 'polls/detail.html', {'question': question}) 

    Como esse modelo de view é extremmamente comum (tenta
    recuperar um objeto dos models, se der certo, blz, se
    não der certo, cospe um 404) o django providencia
    um atalho que faz isso. Basta criar tres variaveis
    de classe:
    1) template_name (nome do template) -> por padrão,
    o django procura um template como app name>/<model 
    name>_detail.html se usarmos a classe DetailView; 
    o template_view dá override
    nisso. Se for uma ListView, faz a mesma coisa mas 
    procura por um _list.html 
    2) model (model correspondente)
    3) nome do context

    As classes genericas do django esperar um campo
    pk pra identificar o objeto capturado pela URL,
    então mudamos o nome do campo
"""

class IndexView(generic.ListView):
    """
        O generic list view por padrão passa como 
        variável de contexto uma variavel chamada
        <model>_list (nesse caso, question_list). Mas
        Queremos colocar um nome específico, então
        criamos a variavel context_object_name pra
        usar um nome qualquer
    """
    template_name= 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """ Returns the alst five published questions"""
        return Question.objects.order_by('-pub_date')[:5]

class DetailView(generic.DetailView):
    """
    Aqui só iremos sobrescrever o nome padrão do template
    usado. Especificamos qual modelo queremos usar aqui
    e, por padrão, a variável de contexto passada é 
    um objeto extraido do modelo. Ou seja, fazer um get 
    na tabela do modelo com a chave primária passada 
    por parametro:
            question = Question.objects.get(pk)

    """
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id) # Isso aqui tem uma race condition: Se dois usuários tentarem
    # Pegar o mesmo objeto ao mesmo tempo, o resultado da votação pode ser imprevisível. Dá pra usar uma função
    # V() do django pra isso (Deve ser o V e P de mutexes e semáforos)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except(KeyError, Choice.DoesNotExist):
        # Renderiza de novo a tela de votação
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "Você não seleciou uma escolha"
        })
    else:
        selected_choice.votes+=1
        selected_choice.save()
        # Aqui redirecionamos o usuário. Um HTTPRedirect
        # sempre deverá ser usado depois de lidar com
        # uma requisição POST
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
        # O reverse nos permite evitar hardcodar uma # 
        # string do tipo 'polls/id/result. Isso faz o 
        # Django olhar a rota com nome 'results' dentro do
        # app polls e passar como argumento o question.id