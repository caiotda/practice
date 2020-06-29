from django.contrib import admin
from .models import Choice, Question

class ChoiceInline(admin.TabularInline): 
    """
    Ou pode ser StackedInline, isso é questão de estilo 
    que o Django vai providenciar
    """
    model = Choice
    extra = 3

class QuestionAdmin(admin.ModelAdmin):
    #fields = ['question_text', 'pub_date']
    # Posso definir a ordem dos campos aqui, por exemplo.
    fieldsets = [
        ('Texto',               {'fields': ['question_text']}),
        ('Informação de data', {'fields': ['pub_date']}),
    ]
    inlines = [ChoiceInline]
    list_filter = ['pub_date']
    # Adiciona um filtrozinho pela data de publicação
    search_fields = ['question_text']
    # Barra de busca built in. Busca pelas entidades 
    # Com campo question_text que batem com o digitado
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    """
     Por padrão, a tela de listar as entidades do banco
     representa o campo str da entidade, mas isso não é 
     ideal. Por isso, podemos usar a variavel 
     list_display para dizer como representar as etndades
    """

    """

        O inlines basicamente diz pro Django que a classe
        Choice deverá ser editada na pagina do Question,
        e que deverá providenciar 3 opções ao usuário,
        Mas ele permite ao usuário colocar quantas 
        choices ele quiser também!

        Podemos usar o fieldsets também. Ele é um 
        array com a estrutura:
        fieldssets = [
        ('nome do campo', {'fields': [...]})
        ]
        Ou seja, uma lista de tuplas, onde cada
        tupla tem dois itens: o nome do campo e os campos
        descritos por um dicionario e dentro do dicionario
        teriamos uma lista com os campos (ele puxa isso do
        model)
    """
# Register your models here.
    
admin.site.register(Question, QuestionAdmin)
# admin.site.register(Choice)
"""
 Esse código acima funciona, mas ele tem um problema:
 só consigo associar escolhas a questões ha existentes.
 Quero adicionar várias escolhas a questões que estou criando, e não fazer isso só quando a questão já foi 
 criada
"""