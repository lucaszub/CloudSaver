from azure_cost import (
    get_access_token,
    get_cost_data,
    get_daily_costs,
    get_costs_by_resource_group,
    get_costs_custom_period,
    get_costs_by_resource
)
import json

def main():
    try:
        token = get_access_token()
    except Exception as e:
        print(f"[Erreur Authentification] {e}")
        return

    try:
        print("Coûts par service (mois en cours) :")
        print(json.dumps(get_cost_data(token), indent=2))
    except Exception as e:
        print(f"[Erreur API - Service] {e}")

    try:
        print("\nCoûts par jour :")
        print(json.dumps(get_daily_costs(token), indent=2))
    except Exception as e:
        print(f"[Erreur API - Jour] {e}")
        
        
    try:
        print("\nCoûts par groupe de ressources :")
        print(json.dumps(get_costs_by_resource_group(token), indent=2))
    except Exception as e:
        print(f"[Erreur API - Groupe de Ressources] {e}")
    try:
        print("\nCoûts sur une période personnalisée :")
        print(json.dumps(get_costs_custom_period(token, "2025-06-01", "2025-06-24"), indent=2))
    except Exception as e:
        print(f"[Erreur API - Période Personnalisée] {e}")
    try:
        print("\nCoûts par ressource individuelle :")
        print(json.dumps(get_costs_by_resource(token), indent=2))
    except Exception as e:
        print(f"[Erreur API - Ressource Individuelle] {e}")
   

if __name__ == "__main__":
    main()
